package br.com.treinamento.mapper;

import br.com.treinamento.dto.CadastroUsuarioDto;
import br.com.treinamento.dto.CargoDto;
import br.com.treinamento.dto.PerfilDto;
import br.com.treinamento.entity.Cargo;
import br.com.treinamento.entity.Perfil;
import br.com.treinamento.entity.Pessoa;
import br.com.treinamento.entity.Usuario;
import org.hibernate.annotations.Target;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface GenericMapper {

    GenericMapper INSTANCE = Mappers.getMapper(GenericMapper.class);

    CargoDto cargoDto(Cargo cargo);
    Cargo cargo(CargoDto cargoDto);
    Perfil perfil(PerfilDto perfilDto);
    PerfilDto perfilDto(Perfil perfil);

    @Mapping(source = "nome", target = "nome")
    @Mapping(source = "cpf", target = "cpf")
    @Mapping(source = "sexo", target = "sexo")
    @Mapping(source = "dataNascimento", target = "dataNascimento")
    Pessoa pessoa(CadastroUsuarioDto cadastroUsuarioDto);

    @Mapping(source = "perfis", target = "perfis")
    @Mapping(source = "cargo", target = "cargo")
    Usuario usuario(CadastroUsuarioDto cadastroUsuarioDto);
}
