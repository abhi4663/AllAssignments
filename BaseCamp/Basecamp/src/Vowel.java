import java.util.Scanner;

/*Take sentence as an user input and find the vowels in the sentence and replace the next consonant
letter of the vowels with its next ASCII character.
Example1:
Input: I am good boy
Output: I an gooe boz
Example2:
Input: I an gooe boz
Output: I ao goof boa*/
public class Vowel {
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		// String s = "i ab good boy";
		System.out.println("Enter the string");
		String str = sc.nextLine();
		String output = test(str);
		printArray(output);
		System.out.println(output);

	}

	private static void printArray(String output)
	{
		// TODO Auto-generated method stub
		String [] sp=output.split(" ");
		System.out.println("splited words are");
		for(int i=0;i<sp.length;i++)
		{
			System.out.print(sp[i]+" ");
		}
		System.out.println();
		System.out.println("number of words is "+sp.length);
		
		
	}

	public static String test(String s) {
		s = s + ' ';
		String result = "";
		for (int i = 0; i < s.length(); i++) {
			char c = s.charAt(i);
			if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
				result = result + c;
				// to check next character in string
				char ch = s.charAt(i + 1);
				if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == ' ') {
					result = result + ch;
					i = i + 1;
				} else if (ch == 'z') {
					int d = ch;
					d = d - 25; // last alphabet character chenges to a
					char e = (char) d;
					result = result + e;
					i = i + 1;
				} else {
					int a = ch;
					a = a + 1;
					char b = (char) a; // to change next character
					result = result + b;
					i = i + 1;
				}
			} else
				result = result + c;
		}

		return result;
	}
}