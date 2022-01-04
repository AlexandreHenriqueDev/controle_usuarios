package br.com.treinamento.dto;

import br.com.treinamento.entity.Perfil;
import br.com.treinamento.mapper.GenericMapper;
import lombok.Data;

@Data
public class PerfilDto {

    private String id;
    private String nome;

    public Perfil toEntity() {
        return GenericMapper.INSTANCE.perfil(this);
    }

}
