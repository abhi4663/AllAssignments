import java.util.*;

public class ArrayOfInteger {
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		
		System.out.println("Enter the length of Array:");
		int ArrayLength = sc.nextInt();
		
		int[] a = new int[ArrayLength];
		System.out.println("Enter the array elements:");
		for (int i = 0; i < a.length; i++) {
			a[i] = sc.nextInt();
		}
		
		displayHigherNumber(a);
	}

	private static void displayHigherNumber(int[] a) {

		System.out.println("Enter the user input:");
		int userInput = sc.nextInt();
		int temp;
		for (int i = 0; i < a.length; i++) {
			for (int j = i + 1; j < a.length; j++) {
				if (a[i] > a[j]) {
					temp = a[i];
					a[i] = a[j];
					a[j] = temp;
				}
			}
		}
		for (int i = 0; i < a.length; i++) {

			if (a[i] > userInput) {
				System.out.print("output:" + a[i]);
				break;
			}
		}

	}
}
