package br.com.treinamento.dto;

import br.com.treinamento.annotation.CPF;
import br.com.treinamento.entity.Pessoa;
import br.com.treinamento.entity.Usuario;
import br.com.treinamento.enums.SexoEnum;
import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

import static br.com.treinamento.mapper.GenericMapper.INSTANCE;

@Data
public class CadastroUsuarioDto {

    @NotBlank(message = "Nome é obrigatório!")
    private String nome;

    @NotBlank(message = "CPF é obrigatório!")
    @CPF(message = "CPF inválido!")
    private String cpf;

    @NotEmpty(message = "É necessário pelo menos um perfil!")
    private List<PerfilDto> perfis;

    @NotNull(message = "É necessário um cargo!")
    private CargoDto cargo;

    @Valid
    private SexoEnum sexo;
    private Date dataNascimento;

    public Pessoa toPessoa() {
        return INSTANCE.pessoa(this);
    }

    public Usuario toUsuario() {
        return INSTANCE.usuario(this);
    }
}
