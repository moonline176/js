package control;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import common.EmpDAO;
import common.Employee;

/**
 * Servlet implementation class EmpListServlet
 */
@WebServlet("/EmpListServlet") // 출력 역할
public class EmpListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public EmpListServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
//		response.getWriter().append("Served at: ").append(request.getContextPath());
//		PrintWriter out = response.getWriter();
//		out.println(" {\"id\":1, \"first_name\":\"Hong\",\"last_name\":\"kildong\"}"); // {"id":1, "first_name":"Hong","last_name":"kildong"}
		EmpDAO dao = new EmpDAO();
//		String eid = request.getParameter("eid");
//		Employee emp = dao.selectEmp(eid);
		List<Employee> list = dao.getEmpList();
		Gson gson = new GsonBuilder().create();
		response.getWriter().println(gson.toJson(list));
//		out.println(gson.toJson(list));
//		out.print("[");
//		int cnt = 1;
//		for (Employee emp : list) {
//			out.printf(
//					"{\"id\":%d, " + "\"first_name\":\"%s\", " + "\"last_name\":\"%s\", " + "\"email\":\"%s\", "
//							+ "\"hire_date\":\"%s\"}",
//					emp.getEmployId(), emp.getFirstName(), emp.getLastName(), emp.getEmail(), emp.getHireDate());
//			if (cnt++ != list.size()) {
//				out.println(",");
//			}
//		}
//		out.print("]");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
