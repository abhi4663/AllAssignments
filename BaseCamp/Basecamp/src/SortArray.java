import java.util.Scanner;

/*Write a program which takes an array of numbers from user and then sort those numbers using
insertion sort and take out prime numbers if it’s there in array.
Note : The prime numbers in subset should also be in sorted manner.
Input: {9,2,89,7,15}
Output: {2,7,9,15,89}
Prime sorted subset array : {2,7,89}*/

public class SortArray {
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		System.out.println("Enter the Array length");
		int n = sc.nextInt();
		int[] a = new int[n];
		// creating array elements
		System.out.println("Enter the array elememts");
		for (int i = 0; i < a.length; i++) {
			a[i] = sc.nextInt();
		}
		// Array elements before sorting
		System.out.println("Array before sorting :");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}
		insertionSort(a);
		primeNumbers(a);
	}

	private static void primeNumbers(int[] a) {
		// TODO Auto-generated method stub
		System.out.println("\nPrime numbers in given array:");
		for (int i = 0; i < a.length; i++) {
			boolean isPrime = true;
			for (int j = 2; j < a[i]; j++) {
				if (a[i] % j == 0) {
					isPrime = false;
					break;
				}
			}
			if (a[i] == 0 || a[i] == 1) {
				continue;
			}
			if (isPrime)
				System.out.print(a[i] + " ");
		}

	}

	private static void insertionSort(int[] a) {
		// TODO Auto-generated method stub
		int i, j, key;
		for (i = 0; i < a.length; i++) {
			key = a[i];
			j = i - 1;
			while (j >= 0 && a[j] > key) {
				a[j + 1] = a[j];
				j = j - 1;
			}
			a[j + 1] = key;
		}
		System.out.println();
		System.out.println("After sorting :");
		for (i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}
	}

}
