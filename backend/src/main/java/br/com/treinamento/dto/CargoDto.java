package br.com.treinamento.dto;

import br.com.treinamento.entity.Cargo;
import br.com.treinamento.mapper.GenericMapper;
import lombok.Data;

@Data
public class CargoDto {

    private String id;
    private String nome;

    public Cargo toEntity() {
        return GenericMapper.INSTANCE.cargo(this);
    }

}
