import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"
import {PostBusiness} from "../src/business/PostBusiness"
import { ICreatePostInputDTO, IGetPostsInputDTO } from "../src/models/Post"

describe("testes post - mock",()=>{
    const postBusiness = new PostBusiness(
            new PostDatabaseMock(),
            new IdGeneratorMock(),
            new AuthenticatorMock()
        
    )
    test("CreatePost bem sucedido", async()=>{
        const input: ICreatePostInputDTO = {
            token:"token-mock-normal",
            content:"primeiro post"
        }
        const response = await postBusiness.createPost(input)
        expect(response.message).toBe("Post criado com sucesso")
        expect(response.post.getContent()).toBe("primeiro post")
    })

    test("GetPost bem sucedido", async()=>{
        const input: IGetPostsInputDTO = {
            token:"token-mock-normal"
        }
        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(3)
    })
})