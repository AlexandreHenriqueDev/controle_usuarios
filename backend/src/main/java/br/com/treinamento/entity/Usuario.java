package br.com.treinamento.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import static javax.persistence.FetchType.EAGER;
import static javax.persistence.FetchType.LAZY;

@Entity
@Data
@Table(schema = "controle_usuarios", name = "usuario")
public class Usuario implements Serializable {

    private static final long serialVersionUID = 9193793069858909045L;

    @Id
    @Column(name = "id", updatable = false, nullable = false)
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @ManyToOne(fetch = EAGER)
    @JoinColumn(name = "cargo_id")
    private Cargo cargo;

    @OneToOne
    private Pessoa pessoa;

    @ManyToMany(fetch = LAZY)
    @JoinTable(schema = "controle_usuarios", name = "perfil_usuario",
            joinColumns = {
                @JoinColumn(name = "id_perfil", referencedColumnName = "id")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "id_usuario", referencedColumnName = "id")
            }
    )
    private List<Perfil> perfis;

}
