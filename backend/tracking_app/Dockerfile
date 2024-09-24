FROM python:3.6.9

RUN apt-get update && apt-get install

WORKDIR /app

COPY ./requirements.txt ./app/requirements.txt

RUN pip install --no-cache-dir -r ./app/requirements.txt

COPY . ./app

EXPOSE 8000

CMD [ "python3", "./app/manage.py", "runserver", "0.0.0.0:8000"]