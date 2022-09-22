FROM python:3.9.9

WORKDIR /usr/src/app

COPY . .

# WORKDIR ./backend

RUN pip3 install -r requirements.txt


EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0:8000"]