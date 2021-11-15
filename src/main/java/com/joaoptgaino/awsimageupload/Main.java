package com.joaoptgaino.awsimageupload;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Main {

    public static void main(String[] args) {
        args = new String[] {"--spring.config.location=file:properties/application.properties"};
        SpringApplication.run(Main.class, args);
    }

}
