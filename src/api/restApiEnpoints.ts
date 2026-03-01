import { joinUrl } from "../utils";
import appConfig from "./appConfig";

const api = appConfig.API_GATEWAY_ENDPOINT;

export const loginEndpoint = {
    login: joinUrl(api, `auth/login`),
    socialLogin: joinUrl(api, `auth/login/social`),
    register: joinUrl(api, `auth/register`),
    validateEmail: (token: string) => joinUrl(api, `auth/validate-email/${token}`),

    put: {
        refreshToken: (refreshToken: string) => joinUrl(api, `auth/refetch-token/${refreshToken}`),
    },
};

export const coreEndpoints = {
    post: {
        users: joinUrl(api, `account/core/users`),
        invoicePayments: joinUrl(api, `account/core/billing/payments`),
        invoicePaymentsGroup: joinUrl(api, `account/core/billing/payments/group`),
        invoicePaymentTotal: joinUrl(api, `account/core/billing/payments/summary`),
    },
};

export const accountEndpoint = {
    get: {
        cashRegisterRecalculate: (id: string) => joinUrl(api, `account/cashRegisters/recalculate/${id}`),
        billingConfigPlan: (currency: string) => joinUrl(api, `account/accountbilling/billingconfig/currency/${currency}`),
    },
    post: {
        appNotificationReleaseNoteSearch: joinUrl(api, `account/appNotification/releaseNote/search`),
        accountLogsSearch: joinUrl(api, `account/accountLogs/search`),
        accountLogCreate: joinUrl(api, `account/accountLogs`),
    },
    put: {
        updateFile: joinUrl(api, `account/updatefile`),
        accountUserActiveStatus: (userId: string) => joinUrl(api, `account/accountusers/setenable/${userId}`),
        cashRegisterEntry: joinUrl(api, `account/cashregisters/entry`),
    },
    patch: {
        affiliateProgramMemberUserUpdate: (id: string) => joinUrl(api, `account/affiliateProgram/affiliateAccountUser/${id}`),
    },
    delete: {
        transactionAccountConcept: (id: string) => joinUrl(api, `account/transactionAccounts/concepts/${id}`),
    },
};

export const filesEndpoint = {
    post: {
        uploadFile: joinUrl(api, `files/file`),
    },
};