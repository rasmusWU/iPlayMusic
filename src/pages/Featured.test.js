import mockedAxios from "axios";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import Featured from "../pages/Featured";
import TokenContext from "../TokenContext";

afterEach(cleanup);
jest.mock("axios");

describe("Featured Page", function () {
	var response = {
		data: {
			country: "DK",
		},
	};

	var mockContext = [
		{
			access_token: "1234",
		},
	];

	it("shows a list of featured playlists", async function () {
		mockedAxios.get.mockResolvedValue(response);

		act(function () {
			render(
				<TokenContext.Provider value={mockContext}>
					<Featured />
				</TokenContext.Provider>
			);
		});

		await waitFor(function () {
			var text = screen.getByText(/DK/i);
			expect(text);
		});
	});
});
