package com.example.students;



import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepositery extends MongoRepository<User,Long>{


}
