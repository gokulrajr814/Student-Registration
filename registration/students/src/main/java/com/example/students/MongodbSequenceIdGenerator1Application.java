


package com.example.students;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")

@SpringBootApplication
@RestController
public class MongodbSequenceIdGenerator1Application {

    @Autowired
    private UserRepositery repository;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @PostMapping("/save")
    public User saveUser(@RequestBody User user) {

        //set Id
        user.setId(sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME));
        return repository.save(user);

    }
    @GetMapping("/getall")
    public List<User> getUser() {

        return repository.findAll();

    }

    public static void main(String[] args) {
        SpringApplication.run(MongodbSequenceIdGenerator1Application.class, args);
        System.out.println("Project is started");
    }

}