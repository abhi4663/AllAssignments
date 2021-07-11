import java.util.Scanner;
/*
 If the input array is [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60], 
 your program should be able to find that the subarray lies between the
  indexes 3 and 8. Also should print minimum and maximum element of array. 

Output : [30, 25, 40, 32, 31, 35] 
 */
  
public class SubArray {
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {

		int size = 0;
		boolean flag = true;
		do {
			// validation
			System.out.println("Enter the size greater than 8 :");
			size = sc.nextInt();
			if (size >= 9) {
				flag = false;
			}
		} while (flag);
		// initializing and creating the elements
		System.out.println("Enter the array elements :");
		int array[] = new int[size];
		for (int i = 0; i < size; i++) {
			array[i] = sc.nextInt();
		}
		// Displaying the array elements
		System.out.println("The Orginal elements are :");
		for (int i = 0; i < size; i++) {
			System.out.print(array[i] + " ");
		}
		System.out.println();
		// Initializing the min and max with the index 2 element
		int count = 0, min = array[3], max = array[3];
		// Initializing the subArray
		int subArray[] = new int[5];
		// Finding the max and min
		for (int i = 3; i < size; i++) {
			if (count == 5) {
				break;
			}
			if (min > array[i]) {
				min = array[i];
			}
			if (max < array[i]) {
				max = array[i];
			}
			subArray[count] = array[i];
			count++;
		}
		// Displaying the subArray
		System.out.println("The SubArray elements are :");
		for (int i = 0; i < count; i++) {
			System.out.print(subArray[i] + " ");
		}
		System.out.println();
		System.out.println("The Minimum element of the Array is :" + min);

		System.out.println("The Maximum element of the Array is :" + max);
	}
}