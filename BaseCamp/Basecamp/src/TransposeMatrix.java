import java.util.*;

public class TransposeMatrix {
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		System.out.println("Enter the No of Rows:");
		int rows = sc.nextInt();
		System.out.println("Enter the No of Coloumns:");
		int columns = sc.nextInt();

		int[][] matrixArray = new int[rows][columns];
		System.out.println("Enter the array elements:");
		for (int i = 0; i < rows; i++) {
			for (int j = 0; j < columns; j++) {
				matrixArray[i][j] = sc.nextInt();
			}

		}
		System.out.println("The array elements Before Transpose :");
		for (int i = 0; i < rows; i++) {
			for (int j = 0; j < columns; j++) {
				System.out.print(matrixArray[i][j] + " ");
			}
			System.out.println();

		}
		transposeMatrix(matrixArray,rows,columns);

	}

	private static void transposeMatrix(int[][] transpose,int rows, int columns) {
		// TODO Auto-generated method stub
		System.out.println("The array elements after Transpose :");
		for (int i = 0; i < rows; i++) {
			for (int j = 0; j < columns; j++) {
				System.out.print(transpose[j][i]+" ");
			}
			System.out.println();
		}
	}
}

