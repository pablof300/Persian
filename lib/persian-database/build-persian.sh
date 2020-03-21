#!/bin/sh

echo "Compiling and uploading to local repository of Persian"
mvn clean package
mvn install:install-file -Dfile=target/persian-database-1.0-SNAPSHOT.jar -Dsource=target/persian-database-1.0-SNAPSHOT-sources.jar -DpomFile=pom.xml -DlocalRepositoryPath=../../service/local-persian-repository