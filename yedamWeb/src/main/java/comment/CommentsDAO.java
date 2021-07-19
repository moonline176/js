package comment;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CommentsDAO extends DAO {
	private static CommentsDAO instance;

	public static CommentsDAO getInstance() {
		if (instance != null) {
			return instance;
		}
		return new CommentsDAO();
	}
	
	//삭제
	public HashMap<String, Object> delete(Comments comment) {
		connect();
		String sql = "delete from comments where id = ?";
		HashMap<String, Object> map = new HashMap<String, Object>();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, comment.getId());
			int r = psmt.executeUpdate();
			System.out.println(r + "건 수정됨");

			map.put("id", comment.getId());
			map.put("code", "success");
		} catch (SQLException e) {
			e.printStackTrace();
			map.put("code", "error");
			try {
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			disconnect();
		}
		return map; // 처리된 결과 반환
	}
	
	public HashMap<String, Object> update(Comments comment) {
		connect();
		String sql = "update comments set name=?,content = ? where id = ?";
		HashMap<String, Object> map = new HashMap<String, Object>();
		try {
			psmt = conn.prepareStatement(sql);
//			conn.setAutoCommit(false); // 자동 커밋하지 않음
			psmt.setString(1, comment.getName());
			psmt.setString(2, comment.getContent());
			psmt.setString(3, comment.getId());
			int r = psmt.executeUpdate();
			System.out.println(r + "건 수정됨");
			map.put("id", comment.getId());
			map.put("name", comment.getName());
			map.put("content", comment.getContent());
			map.put("code", "success");
		} catch (SQLException e) {
			e.printStackTrace();
			map.put("code", "error");
			try {
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			disconnect();
		}
		return map; // 처리된 결과 반환
	}

	// 입력
	public HashMap<String, Object> insert(Comments comment) {
		// 현재 시퀀스 번호 - 번호+1 - 입력 - 시퀀스+1
		connect();
		int currentId = 0;
		HashMap<String, Object> map = new HashMap<String, Object>();
		try {
			conn.setAutoCommit(false);
			stmt = conn.createStatement();
			rs = stmt.executeQuery("select value from id_repository where name = 'COMMENT'");
			if (rs.next()) {
				currentId = rs.getInt(1);
			}
			currentId++; // 새로운 시퀀스번호
			psmt = conn.prepareStatement("update id_repository set value=? where name='COMMENT'");
			psmt.setInt(1, currentId);
			psmt.executeUpdate();

			psmt = conn.prepareStatement("insert into comments(id, name, content) values(?,?,?)");
			psmt.setInt(1, currentId);
			psmt.setString(2, comment.getName());
			psmt.setString(3, comment.getContent());
			psmt.executeUpdate();
			conn.commit(); // 커밋
			map.put("id", currentId);
			map.put("name", comment.getName());
			map.put("content", comment.getContent());
			map.put("code", "success");
		} catch (SQLException e) {
			e.printStackTrace();
			try {
				conn.rollback();
				map.put("code", "error");
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			disconnect();
		}
		return map; // 처리된 결과 반환
	}

	// 댓글목록
	public List<HashMap<String, Object>> selectAll() {
		connect();
		List<HashMap<String, Object>> list = new ArrayList<HashMap<String, Object>>();
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery("select * from comments order by id");

			while (rs.next()) {
				HashMap<String, Object> map = new HashMap<String, Object>();
				map.put("id", rs.getInt(1));
				map.put("name", rs.getString(2));
				map.put("content", rs.getString(3));
				list.add(map);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;

	}

	/*
	 * public void delete(Comments comment) { connect(); try { psmt =
	 * conn.prepareStatement("delete from comments where id = ?");
	 * conn.setAutoCommit(false); // 자동 커밋하지 않음 psmt.setString(1, comment.getId());
	 * psmt.executeUpdate(); conn.commit(); // 커밋 } catch (Exception e) { // error
	 * 발생 e.printStackTrace(); System.out.println("커밋 도중 에러"); try {
	 * conn.rollback(); // rollback => try내부에서 error발생시 rollback 실행 } catch
	 * (SQLException e1) { e1.printStackTrace(); System.out.println("롤백 도중 에러"); } }
	 * finally { disconnect(); } }
	 */
}
