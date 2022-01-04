package br.com.treinamento.entity;

import br.com.treinamento.dto.PerfilDto;
import br.com.treinamento.mapper.GenericMapper;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(schema = "controle_usuarios", name = "perfil")
@Data
@ToString
public class Perfil implements Serializable {

    private static final long serialVersionUID = 7574992195686497546L;

    @Id
    @Column(name = "id", updatable = false, nullable = false)
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @NotNull
    @Column(name = "nome", unique = true)
    private String nome;

    public PerfilDto toDto() {
        return GenericMapper.INSTANCE.perfilDto(this);
    }
}
