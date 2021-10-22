import React from "react";
import { LoadingDiv, Loader } from "../../styles";

/**
 * Provides a loading screen that will show while fetching data
 */

const LoadingScreen = ({ isLoading }) => {
    return (
        isLoading && (
            <LoadingDiv>
                <Loader />
                Loading gifs for next round, please wait...
            </LoadingDiv>
        )
    )
}

export default LoadingScreen