package control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import common.EmpDAO;
import common.Employee;

@WebServlet("/RegisterServlet") //db추가 역할
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public RegisterServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String eid = request.getParameter("eid");
		String last_name = request.getParameter("last_name");
		String em = request.getParameter("email");
		String hd = request.getParameter("hire_date");
		String fn = request.getParameter("first_name");
		
		EmpDAO dao = new EmpDAO();
		Employee emp = new Employee();
		
		emp.setEmployeeId(Integer.parseInt(eid));
		emp.setFirstName(fn);
		emp.setLastName(last_name);
		emp.setEmail(em);
		emp.setHireDate(hd);
		dao.insertEmp(emp);
		
		//{"id":?,"first_name":?,"last_name":?,"email":?,"hire_date":?}\
		PrintWriter out = response.getWriter();
//		out.println("{\"id\":"+emp.getEmployId()
//					+",\"first_name\":\""+emp.getFirstName()
//					+"\",\"last_name\":\""+emp.getLastName()
//					+"\",\"email\":\""+emp.getEmail()
//					+"\",\"hire_date\":\""+emp.getHireDate()+"\"}");
		Gson gson = new GsonBuilder().create();
		out.println(gson.toJson(emp));
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
