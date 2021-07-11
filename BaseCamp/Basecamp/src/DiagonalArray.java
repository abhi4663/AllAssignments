import java.util.*;

public class DiagonalArray {
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		System.out.println("Enter the number of rows");
		int m = sc.nextInt();
		System.out.println("Enter the number of colomn");
		int n = sc.nextInt();
		// creating array
		System.out.println("Enter the Array Elements");
		int[][] a = new int[m][n];
		for (int i = 0; i < m; i++) {
			for (int j = 0; j < n; j++) {
				a[i][j] = sc.nextInt();
			}
		}
		displayArray(a, m, n);
		maxMin(a,m,n);
		int result = firstDiagonal(a, m, n);
		int result2 = secondDiagonal(a, m, n);
		System.out.println("First Diagonal sum is  " + result);
		System.out.println("Second Diagonal sum is " + result2);
	}

	private static void maxMin(int[][] a, int m, int n) {
		// TODO Auto-generated method stub
		int max=a[0][0];
		int min=a[0][0];
		int rmax=0,rmin=0,cmax=0,cmin=0,temp=0;
		System.out.println("The interchanged MATRIX:");
		for(int i=0;i<m;i++)
		{
			for(int j=0;j<n;j++)
			{
				if(min>a[i][j]) {
					rmin=i;
					cmin=j;
				}
				if(max<a[i][j])
				{
					rmax=i;
					cmax=j;
				}
			}
		}
		temp=a[rmax][cmax];
		a[rmax][cmax]=a[rmin][cmin];
		a[rmin][cmin]=temp;
		displayArray(a, m, n);
		
	}

	// printing 2D array elements
	private static void displayArray(int[][] a, int m, int n) {
// TODO Auto-generated method stub
		for (int i = 0; i < m; i++) {
			for (int j = 0; j < n; j++) {
				System.out.print(a[i][j] + " ");
			}
			System.out.println();
		}
		

	}

	// First diagonal Addition
	private static int firstDiagonal(int[][] a, int m, int n) {
// TODO Auto-generated method stub
		int rows, Sum = 0;
		for (rows = 0; rows < m; rows++) {
			if (a[rows][rows] % 2 != 0) {
				Sum = Sum + a[rows][rows];
			}
		}
		return Sum;

	}

	// Second diagonal Addition
	private static int secondDiagonal(int[][] a, int m, int n) {
// TODO Auto-generated method stub
		int rows, b = 0;
		for (rows = 0; rows < m; rows++) {
			if (a[rows][m - rows - 1] % 2 != 0) {
				b = b + a[rows][m - rows - 1];
			}
		}

		return b;
	}

}