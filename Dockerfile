FROM amazoncorretto:17-alpine-jdk
COPY BackEnd/target/spring-0.0.1-SNAPSHOT.jar /usr/src/app/
WORKDIR /usr/src/app/
CMD java -jar spring-0.0.1-SNAPSHOT.jar
EXPOSE 8084
