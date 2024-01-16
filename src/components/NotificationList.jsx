function NotificationList({ data }) {
	return (
		<ul className="">
			{data.map((item) => (
				<li
					key={item.id}
					className={`px-4 py-4 flex flex-col mb-2 rounded-lg ${
						item.newNotification ? "bg-neutral-veryLightGrayishBlue" : ""
					}`}
				>
					<div className="flex items-center">
						<img className="size-10" src={item.avatar} alt="" />
						<h4 className="pl-3 text-sm font-extrabold">
							<span className="hover:cursor-pointer hover:text-primary-blue">
								{" "}
								{item.name}
							</span>
							<span className="ml-2 text-xs font-extrabold text-neutral-grayishBlue">
								{item.reaction}
							</span>{" "}
							<span
								className={`ml-1  ${
									item.isReaction
										? "text-neutral-darkGrayishBlue"
										: "text-primary-blue"
								}`}
							>
								<span className="hover:text-primary-blue hover:cursor-pointer">
									{item.action}
								</span>
								{item.newNotification && (
									<span className="inline-block w-2 h-2 ml-2 align-middle bg-red-500 rounded-full"></span>
								)}
							</span>
						</h4>

						{item.picture && (
							<img
								src={item.picture}
								alt=""
								className="ml-4 md:ml-auto hover:cursor-pointer size-10"
							/>
						)}
					</div>
					<span className="ml-[52px] text-sm text-neutral-grayishBlue">
						{item.time}
					</span>
					{item.isMessage && (
						<p className="ml-[50px] border-2 rounded-md mt-4 p-4 text-[13px] font-extrabold hover:cursor-pointer hover:bg-neutral-lightGrayishBlue1 text-neutral-grayishBlue">
							{item.message}
						</p>
					)}
				</li>
			))}
		</ul>
	);
}
export default NotificationList;
