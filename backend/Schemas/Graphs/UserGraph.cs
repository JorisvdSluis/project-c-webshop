using backend_datamodel.Models;
using GraphQL.EntityFramework;

namespace backend.Schemas.Graphs
{
    public class UserGraph : BaseGraphType<User>
    {
        public UserGraph(IEfGraphQLService efGraphQlService) : base(efGraphQlService)
        {
            Field(u => u.Email).Description("The email of the user");
            Field(u => u.Firstname).Description("The firstname of the user");
            Field(u => u.Lastname).Description("The lastname of the user");
            Field(u => u.Password, nullable: true).Description("The hashed password of the user");
            Field(u => u.Token, nullable: true).Description("JWT Token");
            Field(u => u.AnonymousRegistrationToken, nullable: true)
                .Description("Token for anonymously registered users");
        }
    }
}