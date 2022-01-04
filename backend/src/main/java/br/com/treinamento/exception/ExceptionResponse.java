package br.com.treinamento.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
public class ExceptionResponse implements Serializable {

    private static final long serialVersionUID = 351451949301798803L;

    private Date timestamp;
    private String message;
    private String details;
}
