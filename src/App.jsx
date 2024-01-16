// react imports
import { useState } from "react";
// components
import NotificationList from "./components/NotificationList";

// data
import { data } from "./data";

function App() {
	const [notifications, setNotifications] = useState(data);

	const markAllAsRead = () => {
		const updatedNotifications = notifications.map((item) => ({
			...item,
			newNotification: false,
		}));
		setNotifications(updatedNotifications);
	};

	return (
		<main className="flex flex-col items-center justify-center min-h-screen font-jakarta bg-neutral-veryLightGrayishBlue">
			<section className="w-[375px] md:w-[600px] py-10 bg-white px-6">
				<div className="flex items-center justify-between py-4">
					<h1 className="text-xl font-extrabold text-neutral-veryDarkBlue">
						Notifications{" "}
						<span
							className={`text-white text-[20px] ml-2 font-medium rounded-md bg-primary-blue px-3 py-[2px] ${
								notifications.some((item) => item.newNotification)
									? ""
									: "hidden"
							}`}
						>
							{notifications.filter((item) => item.newNotification).length}
						</span>
					</h1>
					<button
						type="button"
						onClick={markAllAsRead}
						className="text-neutral-darkGrayishBlue hover:text-primary-blue"
					>
						Mark all as read
					</button>
				</div>
				<NotificationList data={notifications} />
			</section>
			<div className="text-[11px] text-center">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer"
					className="text-blue-600"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://github.com/replayzor/"
					target="_blank"
					rel="noreferrer"
					className="text-blue-600"
				>
					Ionut Oltean
				</a>
				.
			</div>
		</main>
	);
}

export default App;
