import java.util.*;

/*
Find the number of occurence of a given string in the sentence.
Input : "Today is sunday, It's holiday"
Substring : day
Output : 3
*/
public class StringOccurance {
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		System.out.println("Enter the Sentence");
		String str = sc.nextLine();
		System.out.println("Enter thr SubString");
		String word = sc.nextLine();
		int result = NoStringOccurance(str, word);
		System.out.println("The  number of occurence of a given string in the sentence is " + result);
	}

	//no of occurance in given senetence
	private static int NoStringOccurance(String str, String word) {
// TODO Auto-generated method stub
		int index = 0, count = 0;
		while (true) {

			index = str.indexOf(word, index);
			if (index != -1) {
				count++;
				index += word.length();
			} else {
				break;
			}
		}
		return count;
	}
}