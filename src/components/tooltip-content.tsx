import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import classnames from "classnames";
import * as React from "react";

type ContentElement = React.ElementRef<typeof TooltipPrimitive.Content>;
type ContentProps = React.ComponentPropsWithoutRef<
	typeof TooltipPrimitive.Content
>;

// rome-ignore lint/suspicious/noEmptyInterface: <explanation>
export interface TooltipProps extends ContentProps {}

export const TooltipContent = React.forwardRef<
	ContentElement,
	Readonly<TooltipProps>
>(({ sideOffset = 6, children, ...props }, forwardedRef) => (
	<TooltipPrimitive.Portal>
		<TooltipPrimitive.Content
			{...props}
			ref={forwardedRef}
			className={classnames(
				"bg-black border border-slate-6 z-20 px-3 py-2 rounded-md text-xs",
				"font-sans",
			)}
			sideOffset={sideOffset}
		>
			{children}
		</TooltipPrimitive.Content>
	</TooltipPrimitive.Portal>
));

TooltipContent.displayName = "TooltipContent";
