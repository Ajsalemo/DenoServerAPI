FROM denoland/deno:1.13.2

WORKDIR /app

COPY . .

# Copy SSH related files over
COPY sshd_config /etc/ssh/
COPY init_container.sh /opt/

# Start and enable SSH
ENV SSH_PASSWD "root:Docker!"
RUN apt-get update \
    && apt-get install -y --no-install-recommends dialog \
    && apt-get update \
    && apt-get install -y --no-install-recommends openssh-server \
    && echo "$SSH_PASSWD" | chpasswd \
    && chmod u+x /opt/init_container.sh

EXPOSE 8080 2222

ENTRYPOINT [ "/opt/init_container.sh" ]
