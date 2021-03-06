import * as React from "react";
import { ReactInputAttr, SizingProps } from "../../../typings/shared";

interface InheritedProps extends
    Omit<ReactInputAttr, "placeholder">,
    SizingProps
{ }

export interface ToolbarSearchProps extends InheritedProps {
    labelText?: React.ReactNode,
    placeHolderText?: string,
}

declare class ToolbarSearch extends React.Component<ToolbarSearchProps> { }

export default ToolbarSearch;
