package br.com.treinamento.exception;

public class BadRequestException extends RuntimeException {

    public BadRequestException(String message, Throwable throwable) {
        super(message, throwable);
    }

}
