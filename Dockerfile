FROM amazoncorretto:17-alpine-jdk
COPY BackEnd/target/*.jar /usr/src/app/
WORKDIR /usr/src/app/
CMD java -jar *.jar
EXPOSE 8084
