package common;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBCon {
	public static Connection getConnect() {
		Connection conn = null;
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","hr","hr");
			System.out.println("연결 성공");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
}
