 # Secure computing mode (seccomp) is a Linux kernel feature. 
 
 docker run --rm -it --security-opt seccomp=default.json alpine /bin/sh
 
 docker run --rm -it --security-opt seccomp=without-mkdir.json alpine /bin/sh
 