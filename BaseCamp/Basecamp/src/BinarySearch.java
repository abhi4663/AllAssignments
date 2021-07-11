import java.util.*;

public class BinarySearch {
	static Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args) {
		System.out.println("eneter the number of string");
		int m = sc.nextInt();
		
		System.out.println("enter the strings");
		String[] a = new String[m];

		for (int i = 0; i < a.length; i++) {
			a[i] = sc.next();
		}
		System.out.println("Strings are:");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}
		System.out.println();
		System.out.println("enter the Search string");
		String search = sc.next();
	int result=	binarySearch(a, search);
		if (result == 0) {
			System.out.println("No");

		} else {
			System.out.println("YES");
		}
	}

	public static int binarySearch(String[] a, String search) {

		// Sorting in Ascending order
//		for (int i = 0; i < a.length; i++) {
//			for (int j = i + 1; j < a.length; j++) {
//				if (a[i].compareTo(a[j]) > 0) {
//					String temp = a[i];
//					a[i] = a[j];
//					a[j] = temp;
//				}
//			}
//		}
//		for (int i = 0; i < a.length; i++) {
//			System.out.println("After Sorting:" + a[i] + " ");
//		}
//		System.out.println();
		
		//insertion sort
		int i,j;
		for(i=0;i<a.length;i++) {
			search=a[i];
			j=i-1;
			while(j>=0 && a[j].compareTo(search)>0)
			{
				a[j+1]=a[j];
				j=j-1;
			}
			a[j+1]=search;
		}
		for(i=0;i<a.length;i++) {
			System.out.print(a[i]+" ");
		}

		
		
		
		
		// Searching the string binary search
		int low = 0;
		int high = a.length - 1;
		int mid;

		while (low <= high) {
			mid = (low + high) / 2;

			if (a[mid].compareTo(search) < 0) {
				low = mid + 1;
			} else if (a[mid].compareTo(search) > 0) {
				high = mid - 1;
			} else {
				return mid;
			}
		}
		return -1;
	}
}