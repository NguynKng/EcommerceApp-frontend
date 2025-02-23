import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    // Hàm xử lý để định dạng breadcrumb
    const formatBreadcrumb = (str) => {
        return str
            .replace(/-/g, " ") // Thay thế dấu "-" bằng khoảng trắng
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Viết hoa chữ cái đầu
    };

    return (
        <div className="flex justify-center items-center py-4">
            <Link to="/" className="text-gray-500">Home</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                return (
                    <span key={to} className="flex items-center">
                        <span className="mx-2 text-gray-500">/</span>
                        <Link to={to} className="text-black text-lg font-medium">
                            {formatBreadcrumb(value)}
                        </Link>
                    </span>
                );
            })}
        </div>
    );
}

export default Breadcrumb;
