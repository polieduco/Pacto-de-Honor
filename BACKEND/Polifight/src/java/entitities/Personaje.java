/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entitities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Entidad Personaje
 * @author jrubiaob
 */
@Entity
@Table(name = "personaje")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Personaje.findAll", query = "SELECT p FROM Personaje p"),
    @NamedQuery(name = "Personaje.findByIdPersonaje", query = "SELECT p FROM Personaje p WHERE p.personajePK.idPersonaje = :idPersonaje"),
    @NamedQuery(name = "Personaje.findByIdCategoria", query = "SELECT p FROM Personaje p WHERE p.personajePK.idCategoria = :idCategoria"),
    @NamedQuery(name = "Personaje.findByIdImagen", query = "SELECT p FROM Personaje p WHERE p.personajePK.idImagen = :idImagen"),
    @NamedQuery(name = "Personaje.findByNombrePersonaje", query = "SELECT p FROM Personaje p WHERE p.nombrePersonaje = :nombrePersonaje"),
    @NamedQuery(name = "Personaje.findByDescripcionPersonaje", query = "SELECT p FROM Personaje p WHERE p.descripcionPersonaje = :descripcionPersonaje"),
    @NamedQuery(name = "Personaje.findByCosto", query = "SELECT p FROM Personaje p WHERE p.costo = :costo"),
    @NamedQuery(name = "Personaje.findByNivelDano", query = "SELECT p FROM Personaje p WHERE p.nivelDano = :nivelDano")})
public class Personaje implements Serializable {
    
    private static final long serialVersionUID = 1L;
    
    @EmbeddedId
    protected PersonajePK personajePK;
    
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "nombre_personaje")
    private String nombrePersonaje;
    
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "descripcion_personaje")
    private String descripcionPersonaje;
    
    @Basic(optional = false)
    @NotNull
    @Column(name = "costo")
    private int costo;
    
    @Basic(optional = false)
    @NotNull
    @Column(name = "nivel_dano")
    private int nivelDano;
    
    @JoinColumn(name = "id_imagen", referencedColumnName = "id_imagen", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Imagen imagen;
    
    @JoinColumn(name = "id_categoria", referencedColumnName = "id_categoria", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Categoria categoria;

    public Personaje() {
    }

    public Personaje(PersonajePK personajePK) {
        this.personajePK = personajePK;
    }

    public Personaje(PersonajePK personajePK, String nombrePersonaje, String descripcionPersonaje, int costo, int nivelDano) {
        this.personajePK = personajePK;
        this.nombrePersonaje = nombrePersonaje;
        this.descripcionPersonaje = descripcionPersonaje;
        this.costo = costo;
        this.nivelDano = nivelDano;
    }

    public Personaje(int idPersonaje, int idCategoria, int idImagen) {
        this.personajePK = new PersonajePK(idPersonaje, idCategoria, idImagen);
    }

    public PersonajePK getPersonajePK() {
        return personajePK;
    }

    public void setPersonajePK(PersonajePK personajePK) {
        this.personajePK = personajePK;
    }

    public String getNombrePersonaje() {
        return nombrePersonaje;
    }

    public void setNombrePersonaje(String nombrePersonaje) {
        this.nombrePersonaje = nombrePersonaje;
    }

    public String getDescripcionPersonaje() {
        return descripcionPersonaje;
    }

    public void setDescripcionPersonaje(String descripcionPersonaje) {
        this.descripcionPersonaje = descripcionPersonaje;
    }

    public int getCosto() {
        return costo;
    }

    public void setCosto(int costo) {
        this.costo = costo;
    }

    public int getNivelDano() {
        return nivelDano;
    }

    public void setNivelDano(int nivelDano) {
        this.nivelDano = nivelDano;
    }

    public Imagen getImagen() {
        return imagen;
    }

    public void setImagen(Imagen imagen) {
        this.imagen = imagen;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (personajePK != null ? personajePK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Personaje)) {
            return false;
        }
        Personaje other = (Personaje) object;
        if ((this.personajePK == null && other.personajePK != null) || (this.personajePK != null && !this.personajePK.equals(other.personajePK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entitities.Personaje[ personajePK=" + personajePK + " ]";
    }
    
}
