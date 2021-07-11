package studentdetails;

public class Student {

	private long id;
	private String name;
	private byte age;
	private int standard;
	private String address;

	public Student() {
		super();
	}

	public Student(long id, String name, byte age, int standard, String address) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.standard = standard;
		this.address = address;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public byte getAge() {
		return age;
	}

	public void setAge(byte age) {
		this.age = age;
	}

	public int getStandard() {
		return standard;
	}

	public void setStandard(int standard) {
		this.standard = standard;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}