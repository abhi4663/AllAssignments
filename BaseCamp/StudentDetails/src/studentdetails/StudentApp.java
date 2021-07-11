package studentdetails;

import java.util.Scanner;

public class StudentApp {
	static Scanner sc = new Scanner(System.in);
	static int noOfStudents = 0;
	static int x;
	static String y = "";

	public static void main(String[] args) {
		boolean flag = true;

		Student[] students = new Student[0];
		do {
			displayMainMenu();
			System.out.println("Enter the choice :");
			int ch = sc.nextInt();
			switch (ch) {
			case 1:
				students = addStudentDetails(students);
				displayStudentDetails(students);
				break;
			case 2:
				if (noOfStudents != 0) {
					students = updateStudent(students);
					break;
				} else {
					System.out.println("The system does not contain any data ...Please ENTER");
				}
				break;
			case 3:
				if (noOfStudents != 0) {
					students = deleteStudent(students);
					displayStudentDetails(students);
					break;
				} else {
					System.out.println("The system does not contain any data ...Please ENTER");
				}
				break;
			case 4:
				if (noOfStudents != 0) {
					System.out.println("Displaying User details by id....");
					students = displayStudentsbasedId(students);
					displayStudentDetails(students);
					System.out.println();
				} else {
					System.out.println("The system does not contain any data ...Please ENTER");
				}
				break;
			case 5:
				flag = false;
				break;
			default:
				System.out.println("The choice is invalid....!");
				break;
			}
		} while (flag);
	}

	private static Student[] displayStudentsbasedId(Student[] students) {
		Student sortedId[] = students;

		for (int i = 0; i < sortedId.length; i++) {
			for (int j = 1; j < sortedId.length - i; j++) {
				if (sortedId[j - 1] != null && sortedId[j] != null) {
					if (sortedId[j - 1].getId() > sortedId[j].getId()) {
						Student temp = sortedId[j - 1];
						sortedId[j - 1] = sortedId[j];
						sortedId[j] = temp;
					}
				}
			}
		}

		return students;
	}

	private static Student[] deleteStudent(Student[] students) {
		System.out.println("Enter the id which you want to delete :");
		long id = sc.nextInt();
		boolean flag = true;
		for (int i = 0; i < students.length; i++) {
			if (students[i] != null && students[i].getId() == id) {
				students[i] = null;
				System.out.println("The data is deleted successfully");
			} else {
				flag = false;
			}
		}
		if (flag == false) {
			System.out.println("The given id is not present in the system....");
		}
		return students;
	}

	private static Student[] updateStudent(Student[] students) {
		System.out.println("Enter the id which you want to update :");
		int id = sc.nextInt();
		boolean check = false;
		for (int i = 0; i < students.length; i++) {
			if (id == students[i].getId()) {
				check = true;
				break;
			}
		}
		if (check == false) {
			System.out.println("The given id is not found...");

		} else {
			System.out.println("The Option Should allow user to Update either by selecting 1.Age or 2.Address :");
			int ch = sc.nextInt();
			byte updatedAge = 0;
			switch (ch) {
			case 1:
				System.out.println("Enter Updated Age is :");
				updatedAge = sc.nextByte();

				for (int i = 0; i < students.length; i++) {
					if (students[i].getId() == id) {
						students[i].setAge(updatedAge);
						displayParticularStudent(students[i]);
					}
				}

				break;
			case 2:
				System.out.println("Enter Updated Address is :");
				sc.nextLine();
				String updatedAddress = sc.nextLine();

				for (int i = 0; i < students.length; i++) {
					if (students[i].getId() == id) {
						students[i].setAddress(updatedAddress);
						displayParticularStudent(students[i]);
					}
				}
				break;
			}
		}

		return students;
	}

	private static void displayParticularStudent(Student student) {
		System.out.println("The Student ID is :" + student.getId());
		System.out.println("The Student Name is :" + student.getName());
		System.out.println("The Student Age is :" + student.getAge());
		System.out.println("The Student Standard is :" + student.getStandard() + y + " standard");

		System.out.println("The Student Address is :" + student.getAddress());
		System.out.println();

	}

	private static void displayStudentDetails(Student[] students) {
		for (int i = 0; i < students.length; i++) {
			if (students[i] != null) {
				System.out.println("The Student ID is :" + students[i].getId());
				System.out.println("The Student Name is :" + students[i].getName());
				System.out.println("The Student Age is :" + students[i].getAge());
				System.out.println("The Student Standard is :" + students[i].getStandard() + y + " standard");

				System.out.println("The Student Address is :" + students[i].getAddress());
				System.out.println();
			}
		}

	}

	private static Student[] addStudentDetails(Student[] students) {
		int Standard = 0;
		System.out.println("Enter the number of Student Details :");
		noOfStudents = sc.nextInt();
		Student updateStudents[] = new Student[noOfStudents + students.length];
		for (int i = 0; i < students.length; i++) {
			updateStudents[i] = students[i];
		}
		for (int i = 0; i < noOfStudents; i++) {
			System.out.println();
			System.out.println("Enter the Student Id :");
			long id = sc.nextInt();
			System.out.println("Enter the Student name :");
			sc.nextLine();
			String name = sc.nextLine();
			System.out.println("Enter the age :");
			byte age = sc.nextByte();

			boolean b = false;
			do {
				System.out.println(
						"Enter the Student Standard or class from 1)First Std 2) Second Std 3)Third Std 4)Fourth Std 5)Fifth Std 6)Sizth Std 7)Seventh Std 8)Eighth Std 9) Ninth Std 10)Tenth Std:");
				b = getMenuStandard();
				Standard = x;
			} while (!b);
			sc.nextLine();
			System.out.println("Enter the Student Address is :");

			String Address = sc.nextLine();
			updateStudents[i + students.length] = new Student(id, name, age, Standard, Address);
		}
		return updateStudents;
	}

	private static boolean getMenuStandard() {
		System.out.println("Enter the Standard from the above list :");
		int ch = sc.nextInt();
		switch (ch) {
		case 1:
			x = 1;
			y = "st";
			break;
		case 2:
			x = 2;
			y = "nd";
			break;
		case 3:
			x = 3;
			y = "rd";
			break;
		case 4:
			x = 4;
			y = "th";
			break;
		case 5:
			x = 5;
			y = "th";
			break;
		case 6:
			x = 6;
			y = "th";
			break;
		case 7:
			x = 7;
			y = "th";
			break;
		case 8:
			y = "th";
			x = 8;
		case 9:
			x = 0;
			y = "th";
			break;
		case 10:
			x = 10;
			y = "th";
			break;
		default:
			return false;
		}
		return true;
	}

	private static void displayMainMenu() {
		System.out.println("---------------------------------------Main Menu---------------------------------------");
		System.out.println("1. Add Student details to the system and Display all Student details present in system.");
		System.out.println("2. Update Student details based on address and age.");
		System.out.println("3. Delete Student details from the record.");
		System.out.println("4. Display Student details by id.");
		System.out.println("5.  Exit");
		System.out.println("---------------------------------------------------------------------------------------");

	}

}
