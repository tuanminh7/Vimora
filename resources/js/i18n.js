const messages = {
    vi: {
        common: {
            cancel: 'Hủy',
            close: 'Đóng',
            save: 'Lưu',
            login: 'Đăng nhập',
            logout: 'Đăng xuất',
            start: 'Bắt đầu',
            language: 'Ngôn ngữ',
            theme: 'Giao diện',
            yes: 'Có',
            no: 'Không',
            none: 'Không có',
        },
        layout: {
            home: 'Trang chủ',
            library: 'Thư viện',
            vocabulary: 'Từ vựng',
            review: 'Ôn tập',
            userSettings: 'Cài đặt tài khoản',
            userManual: 'Hướng dẫn sử dụng',
            adminSettings: 'Quản trị',
            kanji: 'Kanji',
            hide: 'Ẩn',
            more: 'Thêm',
            expandSidebar: 'Mở rộng thanh bên',
            selectLanguage: 'Chọn ngôn ngữ',
        },
        login: {
            firstRunTitle: 'Có vẻ đây là lần đầu bạn sử dụng Vimora sau khi cài đặt. Hãy tạo tài khoản đầu tiên, tài khoản này sẽ tự động có quyền quản trị.',
            createFirstUser: 'Tạo tài khoản đầu tiên',
            userCreated: 'Tạo tài khoản thành công.',
            emailAddress: 'Địa chỉ email',
            emailPlaceholder: 'Nhập địa chỉ email',
            password: 'Mật khẩu',
            passwordPlaceholder: 'Nhập mật khẩu',
            invalidPassword: 'Mật khẩu không hợp lệ.',
            invalidEmail: 'Email không hợp lệ.',
            invalidCredentials: 'Email hoặc mật khẩu không đúng.',
        },
        home: {
            passwordChange: 'Đổi mật khẩu',
            passwordChangeNotice: 'Tài khoản và mật khẩu của bạn được quản trị viên tạo sẵn. Hãy đổi mật khẩu trước khi tiếp tục học.',
            changePassword: 'Đổi mật khẩu',
            about: 'Giới thiệu',
            aboutText: 'Bạn có thể xem thêm thông tin về Vimora tại các liên kết dưới đây.',
            attributions: 'Ghi công',
            overview: 'Tổng quan',
            contact: 'Liên hệ',
            contactText: 'Bạn có thể liên hệ với tác giả Vimora qua các nền tảng sau.',
            discord: 'Trò chuyện Discord',
            version: 'Phiên bản',
            versionText: 'Phiên bản Vimora hiện tại là {version}.',
            updateNotes: 'Ghi chú cập nhật',
        },
        dialogs: {
            logoutTitle: 'Đăng xuất',
            logoutConfirm: 'Bạn có muốn đăng xuất không?',
            reviewTitle: 'Ôn tập',
            book: 'Sách',
            chapter: 'Chương',
            reviewAllBooks: 'Ôn các thẻ đến hạn từ tất cả sách của bạn.',
            practiceMode: 'Chế độ luyện tập',
            practiceModeIntro: 'Trong chế độ luyện tập:',
            practiceModeItem1: 'Ngày ôn tập của từ và cụm từ sẽ không thay đổi.',
            practiceModeItem2: 'Cấp độ của từ và cụm từ sẽ không thay đổi.',
            practiceModeItem3: 'Số lượt ôn sẽ không được tính vào mục tiêu hằng ngày.',
            practiceModeItem4: 'Bạn cũng sẽ thấy các thẻ chưa đến hạn ôn ngay hôm nay.',
            themeTitle: 'Giao diện',
            themeAuto: 'Tự động',
            themeLight: 'Giao diện sáng',
            themeDark: 'Giao diện tối',
            themeEink: 'Giao diện e-ink',
            languageTitle: 'Ngôn ngữ',
            oneAdditionalLanguage: 'Có thêm 1 ngôn ngữ có thể cài đặt.',
            manyAdditionalLanguages: 'Có thêm {count} ngôn ngữ có thể cài đặt.',
            adminOnlyLanguages: 'Chỉ quản trị viên mới có thể cài đặt ngôn ngữ.',
            manageLanguages: 'Quản lý ngôn ngữ',
        },
        goals: {
            dailyGoals: 'Mục tiêu hằng ngày',
            calendar: 'Lịch',
            displayedGoal: 'Mục tiêu hiển thị',
            goal: 'Mục tiêu',
            reviewsDue: 'Thẻ đến hạn',
            reading: 'Đọc',
            review: 'Ôn tập',
            newWords: 'Từ mới',
            names: {
                'Reviews': 'Ôn tập',
                'Reading': 'Đọc',
                'New words': 'Từ mới',
            },
            descriptions: {
                reading: 'Đọc {count} từ từ bất kỳ nội dung nào bạn đã nhập.',
                reviews: 'Ôn {count} thẻ đến hạn trong hôm nay.',
                newWords: 'Tô sáng và lưu {count} từ mới để ôn lại.',
            },
            startReview: 'Bắt đầu ôn',
            library: 'Thư viện',
            editGoalTitle: 'Chỉnh mục tiêu {name} hằng ngày',
            editGoalNotice: 'Thiết lập này chỉ ảnh hưởng từ hôm nay trở đi. Những ngày trước đó sẽ không bị thay đổi.',
            goalQuantity: 'Số lượng mục tiêu',
            goalQuantityPlaceholder: 'Nhập số lượng mục tiêu',
        },
        statistics: {
            title: 'Thống kê',
            labels: {
                'Days of activity': 'Số ngày hoạt động',
                'Read words': 'Số từ đã đọc',
                'Kanji': 'Kanji',
                'Known words': 'Từ đã thuộc',
                'Words currently studied': 'Từ đang học',
                'Known lemmas': 'Lemma đã biết',
            },
        },
        password: {
            title: 'Đổi mật khẩu',
            newPassword: 'Mật khẩu mới',
            confirmNewPassword: 'Xác nhận mật khẩu mới',
            confirmPlaceholder: 'Nhập lại mật khẩu',
            changedSuccess: 'Đổi mật khẩu thành công!',
            passwordLength: 'Mật khẩu phải dài từ 8 đến 32 ký tự.',
            passwordMismatch: 'Xác nhận mật khẩu không khớp.',
        },
        pages: {
            title: 'Vimora | Học ngôn ngữ',
        },
        errors: {
            error: 'Lỗi',
        },
    },
};

const defaultLocale = 'vi';

function getByPath(object, path) {
    return String(path || '')
        .split('.')
        .reduce((result, part) => (result && Object.prototype.hasOwnProperty.call(result, part) ? result[part] : null), object);
}

function interpolate(message, params) {
    return Object.keys(params || {}).reduce((result, key) => {
        return result.replace(new RegExp(`\\{${key}\\}`, 'g'), params[key]);
    }, message);
}

export function translate(key, fallback = '', params = {}) {
    const message = getByPath(messages[defaultLocale], key);
    const template = typeof message === 'string' ? message : (fallback || key);
    return interpolate(template, params);
}

export default {
    install(Vue) {
        Vue.prototype.$t = function(key, fallback = '', params = {}) {
            return translate(key, fallback, params);
        };
    }
};
