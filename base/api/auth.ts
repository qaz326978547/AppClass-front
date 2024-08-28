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

    export async function testLog() {
        const [err, result] = await asyncDo($http<{ token: string }>('get', `test`));
        if (!isResponseOK(err, result)) {
            return false;
        }
        return result;
    }
}

