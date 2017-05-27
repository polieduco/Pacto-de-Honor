/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Usuario
 */
public class CapturaModuloPoder extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet CapturaModuloPoder</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet CapturaModuloPoder at " + request.getContextPath() + "</h1>");
                                  
            out.println("</body>");
            out.println("</html>");
            
            String IdImagen=request.getParameter("idImagen");
            String NomPoder=request.getParameter("nombrePoder");
            String DescriPoder = request.getParameter("descripcionPoder");
            String TipoPoder = request.getParameter("tipoPoder");
            String FormaPoder = request.getParameter("formaPoder");
            String PotenciaPoder = request.getParameter("potenciaPoder");
            
            System.out.println(IdImagen);
            System.out.println(NomPoder);
            System.out.println(DescriPoder);
            System.out.println(TipoPoder);
            System.out.println(FormaPoder);
            System.out.println(PotenciaPoder);
            
            PreparedStatement psInser;
            MyDb con = new MyDb();
            psInser = con.getCon().prepareStatement("INSERT INTO poder(id_imagen,nombre_poder,descripcion_poder,tipo_poder,forma_poder,potencia_poder)"+"values(?,?,?,?,?,?)");          
            psInser.setString(1, IdImagen);
            psInser.setString(2, NomPoder);
            psInser.setString(3, DescriPoder);
            psInser.setString(4, TipoPoder);
            psInser.setString(5, FormaPoder);
            psInser.setString(6, PotenciaPoder);
            psInser.executeUpdate();
            
        } catch (SQLException ex) {
            Logger.getLogger(CapturaModuloPoder.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
