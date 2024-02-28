#!/usr/bin/env bash

# See the README for more information about this script.

TEMPFILE="$(mktemp)"

openssl genrsa 2048 2>/dev/null | openssl pkcs8 -topk8 -nocrypt -out $TEMPFILE
PUBKEY=$(openssl rsa -in $TEMPFILE -pubout -outform DER 2>/dev/null | openssl base64 -A)
COMPONENTID=$(openssl rsa -in $TEMPFILE -pubout -outform DER 2>/dev/null | shasum -a 256 | head -c32 | tr 0-9a-f a-p)

PEMFILE="ad-block-updater-$COMPONENTID.pem"

echo "$PUBKEY"
echo
echo "$COMPONENTID"
echo

mv "$TEMPFILE" "$PEMFILE"

echo "Private key written to $PEMFILE."
echo "Please upload it to 1Password and make sure it is synced with Jenkins."
