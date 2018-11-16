using System;
using GraphQL.Types;

namespace backend.Schemas.Inputs
{
    public class CreateAccountData
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public DateTime? DateOfBirth { get; set; }
    }
    
    public class CreateAccountInput : InputObjectGraphType<CreateAccountData>
    {
        public CreateAccountInput()
        {
            Name = "CreateAccountInput";

            Field(e => e.Email);
            Field(e => e.Password);
            Field(e => e.Firstname, nullable: true);
            Field(e => e.Lastname, nullable: true);
            Field(e => e.DateOfBirth, nullable: true);
        }
    }
}