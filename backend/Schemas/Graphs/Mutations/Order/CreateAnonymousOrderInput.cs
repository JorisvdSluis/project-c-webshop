using GraphQL.Types;

namespace backend.Schemas.Graphs.Mutations.Order
{
    public class CreateAnonymousOrderData
    {
        public string Email { get; set; }
        public int[] ProductIds { get; set; }
    }

    public class CreateAnonymousOrderInput : BaseInputTypeGraph<CreateAnonymousOrderData>
    {
        public CreateAnonymousOrderInput()
        {
//            Name = "CreateOrderInput";

            Field(e => e.Email);
            Field(e => e.ProductIds);
        }
    }
}
