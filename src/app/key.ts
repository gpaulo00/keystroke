
import AES = require('crypto-js/aes');
import Utf8 = require('crypto-js/enc-utf8');

export class KVPair {
  key: string;
  value: string;
  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}

/**
 * Contains the credentials of a key.
 */
export class KeyData {
  user?: string;
  pass: string;
  extra: KVPair[];
}

/**
 * Describes a key stored in the system.
 */
export class Key {
  id?: number;
  title: string;
  payload: string;
  data?: KeyData;

  /**
   * Decrypts the key payload.
   * @param {Key} o       key object
   * @param {string} key  password
   * @returns {Key}       key object with decrypted data
   */
  static load(o: Key, key: string): Key {
    o.data = JSON.parse(AES.decrypt(o.payload, key).toString(Utf8));
    return o;
  }

  /**
   * Encrypts the key data.
   * @param {Key} o       key object
   * @param {string} key  password
   * @returns {Key}       key object with encrypted payload
   */
  static save(o: Key, key: string): Key {
    o.payload = AES.encrypt(JSON.stringify(o.data), key).toString();
    o.data = null;
    return o;
  }
}
