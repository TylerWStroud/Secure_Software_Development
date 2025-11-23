# Purpose

The assignment's learning objective is for students to gain first-hand experience on
Secure development via cryptography and Authentication.
Activities:

1) You are given a program to with the files and codes, you need to decrypt the
file called (ciphertext.txt) using Monoalphabetic cypher techniques. Files to
make use of: freq.py, words.txt, and ciphertext.txt.

2) Apply RSA for encryption and decryption, encrypt and decrypt one sentence
(b’A secret message!\n’). Show the encrypted and cipher texts.  
Show authentication process: Modify one byte of the signature message (b’An
important message’) in the verify.py file before integrity check and in another
run do not modify any byte before integrity check. if it does print “The
signature is valid”, but if it doesn’t print “The signature is NOT valid”
Files involved: key_gen.py, encrypt.py, decrypt.py, sign.py, and verify.py

3) AES encryption with padding (AES.MODE_CBC) and encryption with no
padding(AES.MODE_GCM). See the difference in the size of the cipher texts
file sizes of both files produced and explain the differences. Files to use
(enc.py, enc_gcm.py). Data: I love KSU College of Computer and Software
Engineering program.
On 2 and 3, make sure you install the Crypto package, then you can use the
headers of the file.
Resources:  
  
Install virtual box
<https://www.virtualmetric.com/blog/how-to-enable-hardware-virtualization>
<https://www.virtualbox.org/wiki/Download_Old_Builds_6_0>
