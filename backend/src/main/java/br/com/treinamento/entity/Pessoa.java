package br.com.treinamento.entity;

import br.com.treinamento.enums.SexoEnum;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

import static javax.persistence.EnumType.STRING;

@Entity
@Data
@Table(schema = "controle_usuarios", name = "pessoa")
public class Pessoa implements Serializable {

    private static final long serialVersionUID = -1858301883462864125L;

    @Id
    @Column(name = "id", updatable = false, nullable = false)
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @NotNull
    @Column(name = "nome")
    private String nome;

    @NotNull
    @Column(name = "cpf", unique = true)
    private String cpf;

    @Column(name = "sexo")
    @Enumerated(STRING)
    private SexoEnum sexo;

    @Column(name = "dataNascimento")
    private Date dataNascimento;

}
