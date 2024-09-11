import { asyncDo, $http, isResponseOK } from '~/utils/https';
export namespace AuthApi {
    /**
     * 一般註冊
     */
    export async function register(data: {
        /**
         * 名字
         */
        name: string;
        /**
         * 電子郵件
         */
        email: string;
        /**
         * 密碼
         */
        password: string;
        /**
         * 確認密碼
         */
        password_confirmation: string;
    }) {
        const [err, result] = await asyncDo($http<{ token: string }>('post', 'api/auth/register', data));
        if (!isResponseOK(err, result)) {
            return false;
        }
        return result;
    }

    export async function thirdPartyRegister(thirdParty: 'google' | 'line') {
        window.location.href = `https://appclass-back.zeabur.app/auth/${thirdParty}`;
    }

    export async function getThirdPartyRegister(thirdParty: 'google' | 'line') {
        console.log('thirdParty', thirdParty);

        const [err, result] = await asyncDo($http<{ data: { url: string } }>('get', `auth/${thirdParty}`));
        if (!isResponseOK(err, result)) {
            return false;
        }
        console.log('result', result);

        return result;
    }

    export async function postThirdPartyCallback(thirdParty: 'google' | 'line') {
        const [err, result] = await asyncDo($http<{ data: { token: string } }>('get', `auth/${thirdParty}/callback`));
        if (!isResponseOK(err, result)) {
            return false;
        }
        return result;
    }

    export async function getToken() {
        const [err, result] = await asyncDo($http<{ token: string }>('get', 'auth/user'));
        if (!isResponseOK(err, result)) {
            return false;
        }
        return result;
    }
}

