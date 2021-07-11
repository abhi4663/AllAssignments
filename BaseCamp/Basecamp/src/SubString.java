import java.util.*;

public class SubString {
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {

		System.out.println("Enter the string");
		String str = sc.nextLine();
		String output = subString(str);
		System.out.println(output);

	}

	private static String subString(String s) {
		// TODO Auto-generated method stub

		String res = "";
		if(s.charAt(0)==s.charAt(s.length()-1))
		{
			for (int i = 1; i < s.length()-1; i++) {
				res=res+s.charAt(i);
			}
			return res;
				
		}
		else
			return s;
		
		
	}
}
